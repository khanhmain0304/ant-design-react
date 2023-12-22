import { Typography } from "antd";
import { InstagramFilled, FacebookFilled, TwitterSquareFilled } from "@ant-design/icons";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://facebook.com/ShioKenD" target="_blank" className="typo-link">
        <FacebookFilled style={{ fontSize: 24 }} />
      </Typography.Link>
      <Typography.Link href="https://facebook.com/ShioKenD" target="_blank">
        <InstagramFilled style={{ fontSize: 24 }} />
      </Typography.Link>
      <Typography.Link href="https://facebook.com/ShioKenD" target="_blank">
        <TwitterSquareFilled style={{ fontSize: 24 }} />
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
