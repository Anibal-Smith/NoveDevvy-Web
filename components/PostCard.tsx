import React from 'react';
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, ShareIcon } from '@heroicons/react/24/outline';

export interface PostData {
  id: number;
  candidateName: string;
  candidateParty: string;
  timestamp: string;
  profilePicUrl: string;
  postText: string;
  postImageUrl?: string;
  likes: number;
  comments: number;
}

interface PostCardProps {
  post: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div style={styles.card}>
      {/* Encabezado */}
      <div style={styles.header}>
        <button style={{
          padding: '6px 14px',
          backgroundColor: '#D7263D',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginRight: '10px'
        }}>
        Perfil
      </button>
        <img
        
          src={post.profilePicUrl}
          
          alt={`Foto de perfil de ${post.candidateName}`}
          style={styles.profilePic}
        />
        <div>
          <p style={styles.name}>{post.candidateName}</p>
          <p style={styles.party}>{post.candidateParty} · {post.timestamp}</p>
        </div>
      </div>

      {/* Texto */}
      <div style={styles.postText}>
        <p>{post.postText}</p>
      </div>

      {/* Imagen */}
      {post.postImageUrl && (
        <div>
          <img
            src={post.postImageUrl}
            alt={`Publicación de ${post.candidateName}`}
            style={styles.postImage}
          />
        </div>
      )}

      {/* Estadísticas */}
      <div style={styles.stats}>
        <span><strong style={{ color: '#D7263D' }}>{post.likes}</strong> Me gusta</span>
        <span><strong style={{ color: '#D7263D' }}>{post.comments}</strong> Comentarios</span>
      </div>

      {/* Acciones */}
      <div style={styles.actions}>
        <ActionButton icon={<HeartIcon style={styles.icon} />} text="Me gusta" />
        <ActionButton icon={<ChatBubbleOvalLeftEllipsisIcon style={styles.icon} />} text="Comentar" />
        <ActionButton icon={<ShareIcon style={styles.icon} />} text="Compartir" />
      </div>
    </div>
  );
};

const ActionButton = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <button style={styles.actionButton}>
    {icon}
    <span style={{ fontWeight: 'bold' }}>{text}</span>
  </button>
);

const styles: Record<string, React.CSSProperties> = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    gap: '15px',
  },
  profilePic: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #D7263D',
  },
  name: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  },
  party: {
    fontSize: '0.9em',
    color: '#777',
  },
  postText: {
    padding: '0 15px 10px 15px',
    color: '#555',
  },
  postImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    fontSize: '0.9em',
    color: '#777',
    borderTop: '1px solid #eee',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '1px solid #eee',
  },
  actionButton: {
    flex: 1,
    padding: '10px',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  icon: {
    width: '20px',
    height: '20px',
    color: '#D7263D',
  },
};

export default PostCard;
