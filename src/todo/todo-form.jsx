import React from 'react'
import IconButton from '../template/icon-button'

export default props => (
    <div className='todoForm' role='form'>
        <div className="col-xs-12 col-sm-9 col-md-10">
            <input id="description" className="form-control" 
            onChange={props.handleChange}
            placeholder="Adicione uma tarefa" value={props.description}></input>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
        </div>
    </div>
)