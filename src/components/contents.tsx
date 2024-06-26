import { useContextStoreProvider } from "../context/store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Typewriter from "../context/typewriter";
const Contents = () => {
  const { data, isLoading } = useContextStoreProvider();
  console.log("data: ", data);

  return (
    <div>
      {data &&
        data.map((items: any, index) => {
          console.log("items: ", items);
          return (
            <div key={index} className="w-10/12 lg:w-4/5 mx-auto py-5">
              <span className="text-3xl font-bold">{items?.data?.query}</span>
              <div className="flex flex-col gap-y-5">
                {items?.data?.results?.map((res: any, index: number) => {
                  return (
                    <div key={index} className=" mb-5">
                      <ul className="list-disc">
                        <li className=" hover:text-blue-300 text-blue-200 underline text-xl font-bold my-5">
                          {/* <a href={res?.url}>{res?.title}</a> */}
                          <a href={res?.url}>
                            <Typewriter text={res?.title} speed={10} />
                          </a>
                        </li>
                      </ul>
                      <Typewriter text={res?.content} speed={11} />
                    </div>
                  );
                })}
              </div>
              <Typewriter text={items.data.message} speed={14} />
            </div>
          );
        })}
      {isLoading && (
        <div className="text-7xl mt-20 flex justify-center items-center text-blue-300">
          <AiOutlineLoading3Quarters />
        </div>
      )}
    </div>
  );
};

export default Contents;
