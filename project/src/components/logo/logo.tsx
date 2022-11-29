import {Link} from 'react-router-dom';

function Logo({className}: {className: string}){
  return (
    <div className="logo">
      <Link to='/' className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
