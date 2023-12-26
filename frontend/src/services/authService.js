class AuthService {
  static authenticateWithGoogle(tokenId) {
    return fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tokenId })
    }).then(res => res.json());
  }

  static checkUserAccess() {
    return fetch('/api/auth/check-access', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json());
  }
}

export default AuthService;