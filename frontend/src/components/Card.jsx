export default function Card({ children }) {
    return (
      <div style={styles.card}>
        {children}
      </div>
    );
  }
  
  const styles = {
    card: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      minWidth: '300px',
    }
  };
  