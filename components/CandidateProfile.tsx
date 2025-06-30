import React from 'react';

const CandidateProfile: React.FC = () => {
  return (
    <div style={profileStyles.container}>
      {/* Top right label */}
      <div style={profileStyles.topRightLabel}>#Candidato</div>

      {/* Candidate Main Info Section */}
      <section style={profileStyles.mainInfoSection}>
        <div style={profileStyles.candidateImageContainer}>
          <img
            src="/images/martin-vizcarra.png"
            alt="Martin Vizcarra"
            style={profileStyles.candidateImage}
          />
          <div style={profileStyles.peruLogo}>
            <img
              src="/images/peru-logo.png"
              alt="Peru"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
        <div style={profileStyles.descriptionContainer}>
          <div style={profileStyles.descriptionLabel}>Perfil</div>
          <h2 style={profileStyles.candidateName}>Martin Vizcarra</h2>
          <p style={profileStyles.descriptionText}><strong>Edad:</strong> 32 años</p>
          <p style={profileStyles.descriptionText}><strong>Género:</strong> Masculino</p>
          <p style={profileStyles.descriptionText}><strong>Ciudad:</strong> Lima</p>
          <p style={profileStyles.descriptionText}><strong>Ámbito:</strong> Político</p>
          <p style={profileStyles.descriptionText}><strong>Votos actuales:</strong> 12,345</p>
        </div>
      </section>

      {/* Political Ideology Section */}
      <section style={profileStyles.ideologySection}>
        <div style={profileStyles.sectionLabel}>Ideología</div>
        <h3 style={profileStyles.sectionTitle}>Ideología Política</h3>
        <p style={profileStyles.ideologyText}>Centrista</p>
      </section>

      {/* Direct Competitors Section */}
      <section style={profileStyles.competitorsSection}>
        <div style={profileStyles.sectionLabel}>Competidores</div>
        <h3 style={profileStyles.sectionTitle}>Competidores Directos</h3>
        <div style={profileStyles.chartPlaceholder}>
          <img src="/images/competitors_chart.png" alt="Competitors Chart" style={{ width: '60%', height: 'auto' }} />
        </div>
      </section>

      {/* Political Reforms Section */}
      <section style={profileStyles.reformsSection}>
        <div style={profileStyles.sectionLabel}>Reformas</div>
        <h3 style={profileStyles.sectionTitle}>Reformas Políticas del Candidato</h3>
        <ul style={profileStyles.reformsList}>
          <li><strong>Reforma del CNM:</strong> Creación de la Junta Nacional de Justicia.</li>
          <li><strong>Financiamiento de campañas:</strong> Mayor transparencia y control.</li>
          <li><strong>Prohibición de reelección inmediata:</strong> Renovación del Congreso.</li>
          <li><strong>Eliminación del voto preferencial:</strong> Fortalecimiento de partidos.</li>
          <li><strong>Lucha contra la corrupción:</strong> Más transparencia en el gobierno.</li>
        </ul>
      </section>
    </div>
  );
};

const primaryRed = '#D7263D';
const lightRed = '#FBEAEA';
const softGray = '#F5F5F5';
const darkText = '#333';

const profileStyles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#fff',
    padding: '25px',
    fontFamily: 'Arial, sans-serif',
    color: darkText,
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  topRightLabel: {
    position: 'absolute',
    top: '15px',
    right: '25px',
    backgroundColor: primaryRed,
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  mainInfoSection: {
    display: 'flex',
    backgroundColor: lightRed,
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '25px',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  candidateImageContainer: {
    flexShrink: 0,
    marginRight: '20px',
    position: 'relative',
    width: '130px',
    height: '160px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: `2px solid ${primaryRed}`,
  },
  candidateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  peruLogo: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    width: '40px',
    height: '40px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  descriptionContainer: {
    flexGrow: 1,
  },
  descriptionLabel: {
    backgroundColor: primaryRed,
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    marginBottom: '8px',
    display: 'inline-block',
  },
  candidateName: {
    fontSize: '1.5em',
    margin: '10px 0 5px 0',
  },
  descriptionText: {
    margin: '4px 0',
  },
  ideologySection: {
    backgroundColor: softGray,
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '25px',
    position: 'relative',
  },
  sectionLabel: {
    backgroundColor: primaryRed,
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    position: 'absolute',
    top: '15px',
    left: '15px',
  },
  sectionTitle: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '15px',
    fontSize: '1.2em',
  },
  ideologyText: {
    textAlign: 'center',
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: primaryRed,
  },
  competitorsSection: {
    backgroundColor: lightRed,
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '25px',
    position: 'relative',
    textAlign: 'center',
  },
  chartPlaceholder: {
    marginTop: '20px',
  },
  reformsSection: {
    backgroundColor: softGray,
    borderRadius: '12px',
    padding: '20px',
    position: 'relative',
  },
  reformsList: {
    paddingLeft: '20px',
    marginTop: '15px',
    lineHeight: '1.6',
  },
};

export default CandidateProfile;
