import { useEffect, useState } from "react"
import UsuarioService from '../services/UsuarioService'

export const Usuarios = () => {

    const [usuario, setUsuario] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')

    const [usuarios, setUsuarios] = useState([])

    const agregarUsuario = (e) => {
        e.preventDefault()
        if (usuario.length === 0 || correo.length === 0 || telefono.length === 0) return
        const usuarioPost = {
            nombre: usuario,
            correo,
            telefono
        }
        UsuarioService.agregarUsuario(usuarioPost).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
        setUsuario('')
        setCorreo('')
        setTelefono('')
    }
    useEffect(() => {
        UsuarioService.getUsuarios().then(response => {
            setUsuarios(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <div className="card w-100 m-3">
                <div className="card-header">
                    <h3>Nuevo Usuario</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={agregarUsuario}>
                        <input type="text" placeholder="Nombre de usuario" onChange={e => setUsuario(e.target.value)} value={usuario} className="form-control" />
                        <input type="text" placeholder="CorreoElectronico" onChange={e => setCorreo(e.target.value)} value={correo} className="mt-3 form-control" />
                        <input type="text" placeholder="Telefono" onChange={e => setTelefono(e.target.value)} value={telefono} className="mt-3 form-control" />
                        <input type="submit" value="Agregar" className="btn w-100 my-3 btn-success" />
                    </form>
                </div>
            </div>
            {
                usuarios.length === 0 ?
                    <h5 className="mx-3 text-secondary">No hay usuarios registrados</h5> :
                    <div className="d-flex justify-content-start w-100 flex-wrap w-75 mx-auto">
                        {
                            usuarios.map(user =>
                                <div key={user.id} className="card p-3 m-3">
                                    <h5>Nombre: <span className="lead">{user.nombre}</span></h5>
                                    <h5>Correo Electronico: <span className="lead">{user.correo}</span></h5>
                                    <h5>Telefono: <span className="lead">{user.telefono}</span></h5>
                                </div>
                            )
                        }
                    </div>
            }
        </>
    )
}
