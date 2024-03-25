import React, { useState } from 'react';

function Team() {
  const [showTeamInfo, setShowTeamInfo] = useState(false); // Estado para controlar la visibilidad del contenido
  const [emailInvitation, setEmailInvitation] = useState(''); // Estado para almacenar el correo electrónico ingresado en el formulario

  const handleEmailChange = (e) => {
    setEmailInvitation(e.target.value);
  };

  const handleInviteSubmit = (e) => {
    e.preventDefault();
    console.log('Invitar a:', emailInvitation);
    // Lógica para enviar la invitación...
    setEmailInvitation('');
  };

  const toggleTeamInfo = () => {
    setShowTeamInfo(!showTeamInfo);
  };

  return (
    <div className="team-container">
      <h3>Team</h3>
      <div className="text_info">
        <p>Manage team members and their billing from one account. Additional seat follows same pricing and payment cycle as active on admin account, more details <a href="#">here</a>.</p>
      </div>
      
      <button onClick={toggleTeamInfo}>Create Team</button>
      {showTeamInfo && ( // Mostrar el contenido solo si showTeamInfo es true
        <>
          <h3>Members</h3>
          <div className="team-info">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Role:</strong> Admin</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Added on:</strong> January 1, 2022</p>
          </div>
          <h3>invitation email</h3>
          <form onSubmit={handleInviteSubmit}>
 
          <input
    type="email"
    id="emailInvitation"
    value={emailInvitation}
    onChange={handleEmailChange}
    required
    className="email-input"
  />
  <div className="invite">
<p>An email invite will be sent to join the team.</p>
  </div>
  
  <button type="submit">Send Invitation</button>
</form>
        </>
      )}
    </div>
  );
}

export default Team;

