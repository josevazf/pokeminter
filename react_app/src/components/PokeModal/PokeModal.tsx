import './PokeModal.style.css'

const PokeModal = ({name, image, id, handleClose}: {name:string, image:string, types: any[], id: number, handleClose: () => void}) => {

  return (
    <div className="modal-backdrop">
        <div className="modal">
            <img className="modal-img" src={image} alt="profile pic" />
            <div className="modal-body">
               <div className='modal-name'>{name}</div>
               <div className='modal-role'>{id}</div>
            </div>
            <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>
    </div>
  );
};

export default PokeModal;