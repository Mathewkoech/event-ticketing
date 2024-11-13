import { Modal, Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';

const CustomModal = ({ open, handleClose, title, content, onConfirm, confirmText = 'Confirm', cancelText = 'Cancel' }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        padding: 4,
        borderRadius: 2,
        boxShadow: 24,
        maxWidth: 500,
        width: '100%'
      }}>
        <Typography id="modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleClose} variant="outlined">
            {cancelText}
          </Button>
          <Button onClick={onConfirm} variant="contained" color="primary">
            {confirmText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
};

export default CustomModal;
