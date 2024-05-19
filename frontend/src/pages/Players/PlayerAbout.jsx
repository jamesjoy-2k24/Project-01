import { formateDate } from "../../utils/formateDate"; 

const PlayerAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">
          About of
          <span className="text-primaryColor font-bold text-[24px] leading-9">
            Ronaldo
          </span>
        </h3>
        <p className="text__para text-justify text-[16px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          culpa illum enim quis quos ducimus odio dolor architecto modi vitae
          inventore sequi saepe, nesciunt eligendi sit iure totam, consequuntur
          voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi consectetur voluptates, hic dignissimos animi corporis odio,
          dicta beatae ipsa optio dolore quaerat placeat modi voluptate,
          praesentium tenetur ducimus repellat aliquam?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-black font-semibold">
            Sports
        </h3>

        <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-primaryColor font-bold text-[15px] leading-9">
                        Football
                    </span>
                    <p className="text-[16px] leadin6 font-medium text-gray-800">
                        Jeeva Club : {formateDate("2018-01-01")} - {formateDate("2022-01-01")}
                    </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-gray-800">
                    Address : Jeeva Club, Vavuniya, Vavuniya
                </p>
            </li>

            
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-primaryColor font-bold text-[15px] leading-9">
                        Cricket
                    </span>
                    <p className="text-[16px] leadin6 font-medium text-gray-800">
                        RTX Club : {formateDate("2018-01-01")} - {formateDate("2022-01-01")}
                    </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-gray-800">
                    Address : RTX Club, Colombo-3, Colombo
                </p>
            </li>
        </ul>
      </div>


      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-black font-semibold">
          Experiences
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-red-200">
            <span className="text-primaryColor font-bold text-[15px] leading-6 ">
              {formateDate("2018-01-01")} - {formateDate("2022-01-01")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-gray-800">
                  Soccer : Captain
            </p>
            <p className="text-[14px] leading-5 font-medium text-gray-800">
                  Jeeva Club
            </p>
          </li>

          <li className="p-4 rounded bg-red-200">
            <span className="text-primaryColor font-bold text-[15px] leading-6 ">
              {formateDate("2018-01-01")} - {formateDate("2022-01-01")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-gray-800">
                  Soccer : Captain
            </p>
            <p className="text-[14px] leading-5 font-medium text-gray-800">
                  Jeeva Club
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerAbout;
