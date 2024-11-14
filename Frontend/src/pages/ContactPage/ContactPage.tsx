import { Breadcrumb, Button, Input } from "antd";

import { Mail, Phone } from "@/assets/svg";

export default function ContactPage() {
  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "Contact",
            },
          ]}
        />
      </div>
      <div className="w-ful flex-col-reverse md:flex-row flex gap-x-[30px] gap-y-[10px] mb-[140px]">
        <div className="basis-1/3 border-[2px] border-second-gray shadow-lg px-[35px] py-10">
          <div className="flex flex-col">
            <div className="flex w-fit gap-x-4 items-center">
              <div className="w-10 h-10 rounded-full bg-second-red flex items-center justify-center">
                <Phone />
              </div>
              <h4 className="text-[16px] font-medium">Call To Us</h4>
            </div>
            <p className="text-[16px] font-normal mt-6">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-[16px] font-normal mt-4">
              Phone: +8801611112222
            </p>
          </div>
          <span className="block w-full h-[1px] bg-black my-8"></span>
          <div className="flex flex-col">
            <div className="flex w-fit gap-x-4 items-center">
              <div className="w-10 h-10 rounded-full bg-second-red flex items-center justify-center">
                <Mail />
              </div>
              <h4 className="text-[16px] font-medium">Write To Us</h4>
            </div>
            <p className="text-[16px] font-normal mt-6">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[16px] font-normal mt-4">
              Email: customer@shopology.com
            </p>
            <p className="text-[16px] font-normal mt-4">
              Email: support@shopology.com
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-y-4 md:gap-y-8 basis-2/3 border-[2px] border-second-gray shadow-lg px-[35px] py-10">
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4">
            <Input
              variant="filled"
              size="large"
              placeholder="Your Name"
              style={{
                borderRadius: "4px",
                flexGrow: 1,
                height: "50px",
              }}
              required
            />
            <Input
              variant="filled"
              size="large"
              placeholder="Your Email"
              style={{
                borderRadius: "4px",
                flexGrow: 1,
                height: "50px",
              }}
              required
            />
            <Input
              variant="filled"
              size="large"
              placeholder="Your Phone"
              style={{
                borderRadius: "4px",
                flexGrow: 1,
                height: "50px",
              }}
              required
            />
          </div>
          <textarea
            className="grow min-h-[200px] bg-second-gray rounded-[4px] p-4 focus:border-[1px] focus:bg-white focus:border-second-red outline-none"
            placeholder="Your Message"
            required
          />
          <div className="flex justify-center md:justify-end">
            <Button
              type="primary"
              size="large"
              style={{
                borderRadius: "4px",
                height: "50px",
              }}
              htmlType="submit"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
