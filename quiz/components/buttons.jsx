export const Button  = () => {
        return (
          <div className="users" >
            {data.map((user) => (
              <button className="user" style={{border:"1px solid", backgroundColor:"cyan",border:"none"}}>{user.name}</button>
            ))}
          </div>
        );
      };


      const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
      ];