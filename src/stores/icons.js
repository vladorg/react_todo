import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTrash, faPlus, faExclamationCircle, faCheck, faUndo, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class {

  iconEdit = <FontAwesomeIcon icon={faEdit} />;
  iconSave = <FontAwesomeIcon icon={faSave} />;
  iconRemove = <FontAwesomeIcon icon={faTrash} />;
  iconAdd = <FontAwesomeIcon icon={faPlus} />;
  iconImportant = <FontAwesomeIcon icon={faExclamationCircle} />;
  iconCompleted = <FontAwesomeIcon icon={faCheck} />;
  iconCancel = <FontAwesomeIcon icon={faUndo} />;
  iconError = <FontAwesomeIcon icon={faTimes} />;
}