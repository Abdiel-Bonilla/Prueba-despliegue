import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>⚽ Fútbol Landing Page</h1>
        <p>Bienvenido a la pasión del fútbol</p>
      </header>

      <section style={styles.section}>
        <h2>Dato Curioso</h2>
        <p>
          El Club Santos Laguna fue fundado en 1983 y ya ha ganado 6 títulos de
          liga en México.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Rivalidad Internacional</h2>
        <p>
          El Clásico entre FC Barcelona y Real Madrid reúne más de 400 millones
          de espectadores en todo el mundo.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Jugador Destacado</h2>
        <p>
          N’Golo Kanté pasó de ligas menores a ser campeón del mundo en 2018 y
          campeón de Champions en 2021.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 Landing Page de Fútbol</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  header: {
    backgroundColor: "#006400",
    color: "white",
    padding: "20px",
  },
  section: {
    margin: "20px",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  footer: {
    backgroundColor: "#222",
    color: "white",
    padding: "10px",
    marginTop: "20px",
  },
};

export default App;
