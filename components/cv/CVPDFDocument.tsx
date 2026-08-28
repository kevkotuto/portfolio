import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Font, 
  Link,
  Image
} from '@react-pdf/renderer';

// Enregistrer des polices personnalisées si nécessaire
// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
// });

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
    alignItems: 'flex-start',
  },
  photoSection: {
    width: 80,
    marginRight: 20,
    alignItems: 'center',
  },
  profilePhoto: {
    width: 70,
    height: 70,
    borderRadius: 35,
    objectFit: 'cover',
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  profileInfoSection: {
    flex: 1,
    marginRight: 20,
  },
  contactSection: {
    width: 120,
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 11,
    color: '#3b82f6',
    fontWeight: 'bold',
    lineHeight: 1.4,
  },
  contactInfo: {
    fontSize: 8,
    color: '#6b7280',
    marginBottom: 1.5,
    textAlign: 'right',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  subsectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 1,
  },
  company: {
    fontSize: 10,
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 9,
    color: '#4b5563',
    marginTop: 4,
    lineHeight: 1.3,
  },
  bulletPoint: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 1,
    marginLeft: 10,
    lineHeight: 1.3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 2,
  },
  skillItem: {
    fontSize: 8,
    backgroundColor: '#f3f4f6',
    color: '#374151',
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 2,
    borderRadius: 3,
  },
  twoColumnContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  column: {
    flex: 1,
  },
  summary: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 12,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: '#e5e7eb',
  },
  formationItem: {
    marginBottom: 8,
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
  },
});

// Interface pour les données du CV
interface CVData {
  nom: string;
  titre: string;
  resume: string;
  contact: {
    email: string;
    telephone: string;
    linkedin: string;
    github: string;
    localisation: string;
  };
  experience: Array<{
    poste: string;
    entreprise: string;
    periode: string;
    details: string[];
  }>;
  formation: Array<{
    diplome: string;
    institution: string;
    periode: string;
    details?: string;
  }>;
  competences: {
    langages: string[];
    frameworks: string[];
    bdd: string[];
    infrastructure: string[];
    outils: string[];
    paiement: string[];
    autres: string[];
    ia: string[];
  };
  langues: Array<{
    nom: string;
    niveau: string;
  }>;
}

interface CVPDFDocumentProps {
  data: CVData;
  /** Chemin de la photo : URL relative dans le navigateur, chemin disque cote serveur. */
  photoSrc?: string;
}

const CVPDFDocument: React.FC<CVPDFDocumentProps> = ({ data, photoSrc = '/image/pp.jpg' }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          {/* Photo de profil */}
          <View style={styles.photoSection}>
            <Image 
              src={photoSrc} 
              style={styles.profilePhoto}
              cache={false}
            />
          </View>
          
          {/* Informations profil */}
          <View style={styles.profileInfoSection}>
            <Text style={styles.name}>{data.nom}</Text>
            <Text style={styles.title}>{data.titre}</Text>
          </View>
          
          {/* Coordonnées */}
          <View style={styles.contactSection}>
            <Text style={styles.contactInfo}>{data.contact.email}</Text>
            <Text style={styles.contactInfo}>{data.contact.telephone}</Text>
            <Text style={styles.contactInfo}>{data.contact.localisation}</Text>
            <Link src={data.contact.linkedin} style={[styles.contactInfo, styles.link]}>
              LinkedIn
            </Link>
            <Link src={data.contact.github} style={[styles.contactInfo, styles.link]}>
              GitHub
            </Link>
          </View>
        </View>

        {/* Résumé professionnel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profil Professionnel</Text>
          <Text style={styles.summary}>{data.resume}</Text>
        </View>

        {/* Expérience professionnelle */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expérience Professionnelle</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{exp.poste}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
                <Text style={styles.company}>{exp.entreprise}</Text>
                <Text style={styles.period}>{exp.periode}</Text>
              </View>
              {exp.details.map((detail, i) => (
                <Text key={i} style={styles.bulletPoint}>• {detail}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* Formation et Compétences en deux colonnes */}
        <View style={styles.twoColumnContainer}>
          {/* Formation */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Formation</Text>
            {data.formation.map((form, index) => (
              <View key={index} style={styles.formationItem}>
                <Text style={styles.subsectionTitle}>{form.diplome}</Text>
                <Text style={styles.company}>{form.institution}</Text>
                <Text style={styles.period}>{form.periode}</Text>
                {form.details && (
                  <Text style={styles.description}>{form.details}</Text>
                )}
              </View>
            ))}

            {/* Langues */}
            <View style={{ marginTop: 10 }}>
              <Text style={styles.sectionTitle}>Langues</Text>
              {data.langues.map((lang, index) => (
                <View key={index} style={{ flexDirection: 'row', marginBottom: 2 }}>
                  <Text style={[styles.subsectionTitle, { flex: 1 }]}>{lang.nom}:</Text>
                  <Text style={[styles.description, { flex: 2 }]}>{lang.niveau}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Compétences techniques */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Compétences Techniques</Text>
            
            {Object.entries(data.competences).map(([category, skills]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('bdd', 'BDD').replace('ia', 'IA')}:
                </Text>
                <View style={styles.skillsContainer}>
                  {skills.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>{skill}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CVPDFDocument;