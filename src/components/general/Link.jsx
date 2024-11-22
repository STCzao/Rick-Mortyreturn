
export const Link = ({propiedad}) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {propiedad}
        </a>
      </li>
    </>
  );
};

export default Link