"use client";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading title="// About Me" />
        <div className="mt-8">
          <p className="text-lg text-gray-700 mb-4">
            Xin chào! Mình là <b>Nguyễn Phương Đại</b>, một lập trình viên đam
            mê xây dựng các sản phẩm web hiện đại. Mình yêu thích học hỏi công
            nghệ mới và luôn nỗ lực để phát triển kỹ năng của bản thân.
          </p>
          <p className="text-base text-gray-600">
            Ngoài lập trình, mình còn thích chơi game, nghe nhạc. Mục tiêu của
            mình là trở thành một developer toàn diện và đóng góp cho cộng đồng
            IT Việt Nam.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
