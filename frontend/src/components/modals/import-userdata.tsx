import { useContext } from 'react';

import { UserContext } from '../../store/userContext';

import './modal.scss';

interface Props {
  visible: boolean;
  handleClose(): void;
  handleSubmit(): void;
}

const ImportUserDataModal = (props: Props) => {
  const { user, setUser } = useContext(UserContext);
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, username: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.handleSubmit();
  };

  return props.visible ? (
    <div className='modal'>
      <div className='modal-content'>
        <form onSubmit={handleSubmit}>
          <div className='header'>
            <p>Upload your Chess.com data</p>
          </div>
          <div className='sub-header'>
            <p>Chess.com information</p>
          </div>
          <div className='form-row'>
            <div className='form-row-label'>
              <label>Username</label>
            </div>
            <div className='form-row-input'>
              <input placeholder='SenseiDanya' onChange={handleChange} />
            </div>
          </div>
          <div className='footer'>
            <button className='secondary' onClick={() => props.handleClose()}>Cancel</button>
            <button className='primary'>Get Chess.com data</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default ImportUserDataModal;
