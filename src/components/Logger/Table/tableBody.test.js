import { render, screen } from "@testing-library/react";
import { TableBody } from "./TableBody";

test("It should return table Body with given data.", () => {
  render(
    <table>
      <TableBody
        filteredData={[
          {
            logId: 906468196730134,
            applicationId: null,
            applicationType: null,
            companyId: null,
            actionType: "DARI_REFRESH_TOKEN",
            ip: "10.11.0.89",
            userAgent:
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
            userId: 115678,
            source: null,
            ownerId: null,
            logInfo: null,
            creationTimestamp: "2022-01-31 17:29:00",
          },
        ]}
      />
    </table>
  );
  const actionTypeNode = screen.getByText(/DARI_REFRESH_TOKEN/i);
  const dateNode = screen.getByText(/2022-01-31 17:29:00/i);
  expect(actionTypeNode).toBeInTheDocument();
  expect(dateNode).toBeInTheDocument();
});
