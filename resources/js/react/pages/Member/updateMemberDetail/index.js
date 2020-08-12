import React from 'react';
import { Link } from 'react-router-dom';

const updateMemberDetail = () => {
  return (
    <div className="MemberDetail-root">
        <h3 className="display-3">updateMemberDetail</h3>
        <Link to="/">home</Link>
        <Link to="/member">member</Link>
    </div>
  );
}
export default { updateMemberDetail };
export { updateMemberDetail };