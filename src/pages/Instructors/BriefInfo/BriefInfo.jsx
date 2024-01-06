const BriefInfo = ({ instructor }) => {
  //   console.log(instructor);
  const { name, imageUrl, id, totalStudent, email, language, rating } =
    instructor;
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="">
              <div className="w-12 h-12">
                <img src={imageUrl} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
              <div>{rating}</div>
            </div>
          </div>
        </td>
        <td>{language}</td>
        <td>{totalStudent}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default BriefInfo;
