
const Reservations = () => {
    return (
        <div className="flex gap-5 m-5">
            <div className="border">
                <img src="https://i.ibb.co/p15bQVf/reserved.png" alt="" />
            </div>
            <div className="border w-1/2 flex flex-col items-center">
                <img className="border" src="https://i.ibb.co/K09hTS4/reserved2png.png" alt="" />
                <h1 className="text-center">Make Reservations</h1>
                <form action="">
                    Name:<input className="p-2" type="text" placeholder="Your name" /><br />
                    Guests:<input className="p-2" type="text" placeholder="Number of guests" /><br />
                    Date:<input className="p-2" type="text" placeholder="Date" /><br />
                    <input className="btn btn-secondary p-2 w-full" type="button" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default Reservations;