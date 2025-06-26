// components/CandidateProfile.tsx
import React from 'react';

const CandidateProfile: React.FC = () => {
  return (
    <div style={profileStyles.container}>
      {/* Top right label */}
      <div style={profileStyles.topRightLabel}>B6BDBA</div>

      {/* Candidate Main Info Section */}
      <section style={profileStyles.mainInfoSection}>
        <div style={profileStyles.candidateImageContainer}>
          <img
            src="/images/martin-vizcarra.png" // Ruta desde la carpeta public
            alt="Martin Vizcarra"
            style={profileStyles.candidateImage}
          />
          <div style={profileStyles.peruLogo}>
            <img
              src="/images/peru-logo.png" // Ruta desde la carpeta public
              alt="Peru"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
        <div style={profileStyles.descriptionContainer}>
          <div style={profileStyles.descriptionLabel}>Descripcion:</div>
          <div style={profileStyles.descriptionDetail}>D7D3B1</div>
          <p><strong>Martin Vizcarra</strong></p>
          <p>32 años</p>
          <p>masculino</p>
          <p>lima</p>
          <p>ambito politico</p>
          <p>n actual de votos</p>
        </div>
      </section>

      {/* Political Ideology Section */}
      <section style={profileStyles.ideologySection}>
        <div style={profileStyles.ideologyLabel}>96ABB8</div>
        <h3>Ideologia politica</h3>
        <p style={profileStyles.ideologyText}>centrista</p>
      </section>

      {/* Direct Competitors Section */}
      <section style={profileStyles.competitorsSection}>
        <div style={profileStyles.competitorsLabel}>competidores directos</div>
        <div style={profileStyles.chartPlaceholder}>
          <img src="/images/competitors_chart.png" alt="Competitors Chart" style={{ width: '25%', height: 'auto' }} />
        </div>
      </section>

      {/* Political Reforms Section */}
      <section style={profileStyles.reformsSection}>
        <div style={profileStyles.reformsLabel}>96ABB8</div>
        <h3>Reformas politicas del candidato:</h3>
        <ul>
          <li><strong>Reforma del Consejo Nacional de la Magistratura:</strong> Creacion de la Junta Nacional de Justicia para mejorar la seleccion y nombramiento de jueces y fiscales.</li>
          <li><strong>Regulacion del financiamiento de campañas electorales:</strong> Implementacion de normas para aumentar la transparencia y reducir la influencia del dinero en la politica.</li>
          <li><strong>Prohibicion de reeleccion inmediata de parlamentarios:</strong> Aprobacion de una ley que impide la reeleccion inmediata de congresistas para promover la renovacion y reducir la corrupcion.</li>
          <li><strong>Eliminacion del voto preferencial:</strong> Supresion del voto preferencial para fortalecer los partidos politicos y reducir la personalizacion de la politica.</li>
          <li><strong>Fortalecimiento de la lucha contra la corrupcion:</strong> Implementacion de medidas para combatir la corrupcion y mejorar la transparencia en el gobierno</li>
        </ul>
      </section>
    </div>
  );
};

const profileStyles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#ffebeb',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  topRightLabel: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    backgroundColor: '#dbd1e5',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
  },
  mainInfoSection: {
    display: 'flex',
    backgroundColor: '#d8e5e8',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  candidateImageContainer: {
    flexShrink: 0,
    marginRight: '20px',
    position: 'relative',
    width: '120px',
    height: '150px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #fff',
  },
  candidateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  peruLogo: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  descriptionContainer: {
    flexGrow: 1,
    paddingLeft: '10px',
  },
  descriptionLabel: {
    backgroundColor: '#d7d3b1',
    padding: '3px 8px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '10px',
    display: 'inline-block',
  },
  descriptionDetail: {
    color: '#7f00ff',
    fontSize: '12px',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  ideologySection: {
    backgroundColor: '#f7f0cf',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  ideologyLabel: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#b8c9a8',
    padding: '3px 8px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
  },
  ideologyText: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15px',
  },
  competitorsSection: {
    backgroundColor: '#e0f2f7',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  competitorsLabel: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#b8c9a8',
    padding: '3px 8px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
  },
  chartPlaceholder: {
    marginTop: '30px',
    width: '80%',
    margin: '30px auto 0 auto',
    height: '200px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#666',
    borderRadius: '10px',
  },
  reformsSection: {
    backgroundColor: '#f7f0cf',
    borderRadius: '10px',
    padding: '20px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  reformsLabel: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#b8c9a8',
    padding: '3px 8px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#555',
  },
  reformsSectionUl: {
    listStyleType: 'disc' as 'disc',
    paddingLeft: '20px',
    marginTop: '15px',
  },
  reformsSectionLi: {
    marginBottom: '10px',
    lineHeight: '1.5',
  },
};

export default CandidateProfile;