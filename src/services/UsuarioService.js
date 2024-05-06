import axios from 'axios'

class UsuarioService {
    getUsuarios() {
        return axios.get('https://protective-wholeness-production.up.railway.app/api/usuarios')
    }
    agregarUsuario(usuario) {
        return axios.post('https://protective-wholeness-production.up.railway.app/api/usuarios/crear', usuario)
    }
}
export default new UsuarioService();