const fs = require('node:fs');
const React = require('react');
const { ImageResponse } = require('next/og');
const sharp = require('sharp');
const h = React.createElement;
(async () => {
 const font = fs.readFileSync('public/fonts/BricolageGrotesque-800.ttf');
 const portrait = 'data:image/png;base64,' + fs.readFileSync('public/portraits/kevine-editorial-v1.png').toString('base64');
 const card = h('div', {style:{display:'flex',width:'100%',height:'100%',background:'#202222',color:'#FAFAF6',fontFamily:'Bricolage',position:'relative',overflow:'hidden'}},
 h('div',{style:{position:'absolute',right:-90,top:48,width:590,height:590,borderRadius:'50%',background:'#FFE477'}}),
 h('img',{src:portrait,width:500,height:604,style:{position:'absolute',right:-4,bottom:-40}}),
 h('div',{style:{display:'flex',flexDirection:'column',padding:58,width:760}},
 h('div',{style:{fontSize:22,letterSpacing:2,color:'#FFE477'}},'KEVINE GHOSSOUB BOUDALHA'),
 h('div',{style:{fontSize:90,lineHeight:1.03,marginTop:65,letterSpacing:-5}},'Du code.'),
 h('div',{style:{fontSize:90,lineHeight:1.03,color:'#FFE477',letterSpacing:-5}},'Du concret.'),
 h('div',{style:{fontSize:25,marginTop:30}},'Développeur & créateur de produits'),
 h('div',{style:{fontSize:20,marginTop:65,color:'#d0d0c8'}},'WEB · MOBILE · DESKTOP · IA     /     ABIDJAN')));
 const image = new ImageResponse(card,{width:1200,height:630,fonts:[{name:'Bricolage',data:font,weight:800,style:'normal'}]});
 fs.writeFileSync('public/social/portfolio-v2.png',Buffer.from(await image.arrayBuffer()));
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#FFE477"/><path d="M15 13h10v16l15-16h13L33 33l21 18H40L25 37v14H15z" fill="#202222"/></svg>';
 fs.writeFileSync('app/icon.svg',svg);
 await sharp(Buffer.from(svg)).resize(180,180).png().toFile('app/apple-icon.png');
 const png=await sharp(Buffer.from(svg)).resize(32,32).png().toBuffer();
 const header=Buffer.alloc(22);header.writeUInt16LE(1,2);header.writeUInt16LE(1,4);header[6]=32;header[7]=32;header.writeUInt16LE(1,10);header.writeUInt16LE(32,12);header.writeUInt32LE(png.length,14);header.writeUInt32LE(22,18);
 fs.writeFileSync('app/favicon.ico',Buffer.concat([header,png]));
})();
