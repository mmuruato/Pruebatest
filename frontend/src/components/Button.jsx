export default function Button({ type, onClick, children }) {
    return (
      <button type={type} onClick={onClick} style={styles.button}>
        {children}
      </button>
    );
  }
  
  const styles = {
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px'
    }
  };
  