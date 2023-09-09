import Light from "../../images/bg-desktop-light.jpg";
// import {IoIosRadioButtonOff} from "react-icons/io"

const TodoApp = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <div>
            <img src={Light} alt="Light" className="w-[100%]" />
          </div>
          <div className="absolute top-[5%] left-0 right-0 bottom-0 flex justify-center items-center align-middle flex-col">
            <h1 className="mr-[12%] absolute top-12 right-auto   text-[2.5em] text-white mb-8">
              T O D O
            </h1>
            <div>
              {/* <IoIosRadioButtonOff className="absolute m-[14px]"/> */}
              <input
                type="text"
                placeholder="⚪  Create new todo"
                className="border-[3px]  ml-28  outline-none rounded-[10px] h-8 p-[1.2em] w-[26vw]"
              />
            </div>
            <div>

            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoApp;
