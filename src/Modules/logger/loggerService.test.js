import { getMockedData } from "./loggerService";
import axios from "axios";

jest.mock("axios");

describe("#getMockedData() using Promises", () => {
  it("should load mocked data", () => {
    axios.get.mockResolvedValue({
      data: {
        elapsed: 70,
        success: true,
        result: {
          auditLog: [
            {
              actionType: "DARI_REFRESH_TOKEN",
              applicationId: null,
              applicationType: null,
              companyId: null,
              creationTimestamp: "2022-01-31 17:29:00",
              ip: "10.11.0.89",
              logId: 906468196730134,
              logInfo: null,
              ownerId: null,
              source: null,
              userAgent:
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
              userId: 115678,
            },
          ],
          number: 0,
          recordsFiltered: 100,
          recordsTotal: 39103,
          totalPages: 392,
        },
      },
    });

    return getMockedData().then((data) => {
      expect(data).toBeDefined();
      expect(data.data.result.auditLog.length).toBe(1);
    });
  });
});
