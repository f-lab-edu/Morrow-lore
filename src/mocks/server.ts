import { setupServer } from "msw/node";
import { rest } from "msw";
import { handlers } from "./handlers";

const server = setupServer(...handlers);

const servers = setupServer(
  // 싱글 디테일 페이지에 대한 요청 핸들러 설정
  rest.get("/singledetail/:itemId", (req, res, ctx) => {
    const { itemId } = req.params;
    // itemId를 사용하여 모의 데이터를 생성하거나 가져와서 응답합니다.
    const mockData = {
      // 모의 데이터 내용
    };
    return res(ctx.status(200), ctx.json(mockData));
  }),
);

// 서버 시작
beforeAll(() => servers.listen());

// 테스트가 끝날 때 서버 종료
afterAll(() => servers.close());
