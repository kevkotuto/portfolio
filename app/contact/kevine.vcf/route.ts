import { contact } from '@/lib/data/contact';
export function GET(){
 const card=['BEGIN:VCARD','VERSION:3.0','N:Boudalha;Kevine Ghossoub;;;','FN:Kevine Ghossoub Boudalha','TITLE:Développeur Fullstack',`TEL;TYPE=CELL:${contact.phone}`,`EMAIL;TYPE=WORK:${contact.email}`,'URL:https://portfolio.generale-ci.com','ADR;TYPE=WORK:;;Abidjan;;;Côte d’Ivoire;','END:VCARD',''].join('\r\n');
 return new Response(card,{headers:{'Content-Type':'text/vcard; charset=utf-8','Content-Disposition':'attachment; filename="Kevine-Ghossoub.vcf"'}});
}
