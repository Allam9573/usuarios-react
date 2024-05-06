import { useState } from "react"

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const [usuario, setUsuario] = useState('')

    const agregarUsuario = (e) => {
        e.preventDefault()
        setUsuarios([...usuarios, {
            id: usuarios.length + 1,
            nombre: usuario
        }])
        setUsuario('')
    }
    return (
        <>
            <div className="card w-25 m-3">
                <div className="card-header">
                    <h3>Nuevo Usuario</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={agregarUsuario}>
                        <input type="text" placeholder="Nombre de usuario..." onChange={e => setUsuario(e.target.value)} value={usuario} className="form-control" />
                        <input type="submit" value="Agregar" className="btn w-100 my-3 btn-success" />
                    </form>
                </div>
            </div>
            {
                usuarios.length === 0 ?
                    <h5>No hay usuarios registrados</h5> :
                    <div className="d-flex justify-content-start flex-wrap w-75 mx-auto">
                        {
                            usuarios.map(user =>
                                <div key={user.id} className="card m-3">
                                    <h5>{user.nombre}</h5>
                                </div>
                            )
                        }
                    </div>

            }
        </>
    )
}
