import React from 'react';
// Update the import path below if your PostCard component is located elsewhere
import PostCard, { PostData } from '../../components/PostCard';

const mockPosts: PostData[] = [
  {
    id: 1,
    candidateName: 'Ana María Valdivia',
    candidateParty: 'Partido Renovación',
    timestamp: 'Hace 2 horas',
    profilePicUrl: '/images/martin-vizcarra.png',
    postText: '¡Gran día en Puno! Hoy inauguramos el nuevo centro comunitario en el Barrio Bellavista. Gracias a todos por su apoyo incondicional. Juntos construiremos un futuro mejor para nuestra región. #PunoAvanza #Renovación',
    postImageUrl: '/images/martin-vizcarra.png',
    likes: 128,
    comments: 19,
  },
  {
    id: 2,
    candidateName: 'Jorge Torres Mendoza',
    candidateParty: 'Alianza para el Progreso',
    timestamp: 'Hace 5 horas',
    profilePicUrl: '/images/martin-vizcarra.png',
    postText: 'Me he reunido con los representantes del gremio de transportistas para escuchar sus propuestas sobre la mejora de las vías interprovinciales. El diálogo es clave para encontrar soluciones efectivas.',
    likes: 76,
    comments: 12,
  },
  {
    id: 3,
    candidateName: 'Lucía Quispe Flores',
    candidateParty: 'Movimiento Indígena Aymara',
    timestamp: 'Ayer',
    profilePicUrl: '/images/martin-vizcarra.png',
    postText: 'Nuestras tradiciones y nuestra cultura son el alma de Puno. Mi compromiso es y será siempre proteger y promover nuestro patrimonio. ¡Jallalla Puno!',
    postImageUrl: '/images/martin-vizcarra.png',
    likes: 254,
    comments: 45,
  },
];

const FeedPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>MiVoto Feed</h1>
        <img
          src="/images/martin-vizcarra.png"
          alt="Mi Perfil"
          style={styles.profileImage}
        />
      </header>

      {/* Contenido */}
      <main style={styles.mainContent}>
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  pageContainer: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#D7263D',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 25px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #fff',
    objectFit: 'cover',
  },
  mainContent: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '0 15px',
  },
};

export default FeedPage;
