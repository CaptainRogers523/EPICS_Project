document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
  });
  
  document.getElementById('signup-btn').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
  });
  
  document.getElementById('switch-to-signup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signup-btn').click();
  });
  
  document.getElementById('switch-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-btn').click();
  });
  