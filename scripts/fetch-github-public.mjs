#!/usr/bin/env node
// Only public repository metadata and aggregate contribution counts are exported.
import {execFileSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
const query=`query { user(login:"kevkotuto") { login url followers {totalCount} repositories(first:100,privacy:PUBLIC,ownerAffiliations:OWNER,orderBy:{field:PUSHED_AT,direction:DESC}) {totalCount nodes {name url description primaryLanguage {name color} stargazerCount isFork isArchived}} contributionsCollection {startedAt endedAt contributionCalendar {totalContributions weeks {contributionDays {date contributionCount contributionLevel}}}} socialAccounts(first:10) {nodes {provider url}} } }`;
const response=JSON.parse(execFileSync('gh',['api','graphql','-f',`query=${query}`],{encoding:'utf8'}));
if(response.errors||!response.data?.user)throw Error('GitHub query failed');
const u=response.data.user,c=u.contributionsCollection;
const levels={NONE:0,FIRST_QUARTILE:1,SECOND_QUARTILE:2,THIRD_QUARTILE:3,FOURTH_QUARTILE:4};
const days=c.contributionCalendar.weeks.flatMap(w=>w.contributionDays).map(d=>({date:d.date,count:d.contributionCount,level:levels[d.contributionLevel]}));
const snapshot={username:u.login,url:u.url,fetchedAt:new Date().toISOString(),from:c.startedAt,to:c.endedAt,totalContributions:c.contributionCalendar.totalContributions,publicRepos:u.repositories.totalCount,days,repos:u.repositories.nodes.filter(r=>!r.isFork&&!r.isArchived&&!/tectra|tetra/i.test(r.name)).slice(0,4),socials:u.socialAccounts.nodes};
writeFileSync(new URL('../lib/data/github-public.json',import.meta.url),JSON.stringify(snapshot,null,2)+'\n');
console.log(`${snapshot.publicRepos} dépôts publics, ${snapshot.totalContributions} contributions ; ${days.length} jours réels.`);
