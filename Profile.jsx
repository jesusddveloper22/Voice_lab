import React, { useState } from 'react';

function Profile() {
  // Estado para almacenar el nombre de usuario y el canal de YouTube
  const [username, setUsername] = useState('John Doe');
  const [email] = useState('johndoe@example.com'); // Correo electrónico estático
  const [channel1, setChannel1] = useState(''); // Estado para el primer canal de YouTube
  const [channel2, setChannel2] = useState(''); // Estado para el segundo canal de YouTube

  // Función para manejar cambios en el nombre de usuario
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Función para manejar cambios en el canal de YouTube
  const handleChannel1Change = (e) => {
    setChannel1(e.target.value);
  };

  // Función para manejar cambios en el segundo canal de YouTube
  const handleChannel2Change = (e) => {
    setChannel2(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos actualizados al servidor
    console.log('Nombre de usuario actualizado:', username);
    console.log('Canal 1 de YouTube actualizado:', channel1);
    console.log('Canal 2 de YouTube actualizado:', channel2);
    // Podrías agregar aquí la lógica para guardar los cambios en el servidor
  };

  return (
    <div className="profile-container">
      <h3>Basic details</h3>
      <div className="profile-info">
        <div className="profile-details">
          {/* Aquí podrías mostrar más detalles del perfil si lo necesitas */}
        </div>
      </div>
      <div className="edit-profile">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              readOnly // Hace que el campo sea de solo lectura
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="channel1">Channel 1:</label>
            <input
              type="text"
              id="channel1"
              value={channel1}
              onChange={handleChannel1Change}
            />
          </div>
          <div className="form-group">
            <label htmlFor="channel2">Channel 2:</label>
            <input
              type="text"
              id="channel2"
              value={channel2}
              onChange={handleChannel2Change}
            />
          </div>
          <div className="aceptance">
            <p>Prevent copyright claims. Click here to find your </p>
            <p>YouTube channel ID.</p>
            <p>If you're still facing copyright claims on Youtube for </p>
            <p>your videos you can follow the steps to dispute the </p>
            <p>copyright claim.</p>
          </div>
          <button type="submit" className="button-save">Save</button>
        </form>
      </div>
      <div className="notification-settings">
        <h3>Email notifications</h3>
        <form onSubmit={handleSubmit}>
          <div className="notification-option">
            <input type="checkbox" id="export-status" />
            <label htmlFor="export-status">Export status</label>
            <div className="info">
                <p>Get notified whenever your video or audio file is ready for download.</p>
            </div>
          </div>
          <div className="notification-option">
            <input type="checkbox" id="usage-alerts" />
            <label htmlFor="usage-alerts">Usage alerts</label>
          </div>
          <div className="info2">
                <p>Get notified whenever your credits are low.</p>
            </div>
          <div className="notification-option">
            <input type="checkbox" id="newsletters" />
            <label htmlFor="newsletters">Newsletters</label>
          </div>
          <div className="info3">
                <p>Get notified about product updates.</p>
            </div>
          <div className="notification-option">
            <input type="checkbox" id="webinars-events" />
            <label htmlFor="webinars-events">Webinars & Events</label>
          </div>
          <div className="info4">
                <p>Get notified about live webinars and events where Fliki team directly interacts with you.</p>
            </div>
          <div className="notification-option">
            <input type="checkbox" id="offers-promotions" />
            <label htmlFor="offers-promotions">Offers & Promotions</label>
          </div>
          <div className="info5">
                <p>Never miss excitind discounts, offers and other promotions.</p>
            </div>
          <div className="notification-option">
            <input type="checkbox" id="tutorials" />
            <label htmlFor="tutorials">Tutorials</label>
          </div>
          <div className="info6">
                <p>Keep updated about using Fliki so that you get most of out the app.</p>
            </div>
          {/* Agrega más opciones de notificación aquí */}
          <button type="submit" className="button-save">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

