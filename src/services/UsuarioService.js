import axios from 'axios'

class UsuarioService {
    getUsuarios() {
        return axios.get('https://protective-wholeness-production.up.railway.app/api/usuarios')
    }
    agregarUsuario(usuario) {
        return axios.post('https://protective-wholeness-production.up.railway.app/api/usuarios/crear', usuario)
    }
    eliminarUsuario(id){
        return axios.delete(`https://protective-wholeness-production.up.railway.app/api/usuarios/eliminar/${id}`)
    }
}
export default new UsuarioService();