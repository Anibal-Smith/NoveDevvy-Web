// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.iconContainer}>
        {/* Usar iconos reales de una librería como react-icons o SVGs */}
        <div style={headerStyles.iconPlaceholder}>👤</div>
      </div>
      <div style={headerStyles.iconContainer}>
        <div style={headerStyles.iconPlaceholder}>🏠</div>
      </div>
      <div style={headerStyles.iconContainer}>
        <div style={headerStyles.iconPlaceholder}>📈</div>
      </div>
    </header>
  );
};

const headerStyles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px 0',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  iconContainer: {
    padding: '5px 10px',
  },
  iconPlaceholder: {
    fontSize: '24px',
    color: '#333',
  },
};

export default Header;