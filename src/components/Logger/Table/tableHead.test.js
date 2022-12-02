import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { TableHead } from "./TableHead";

test("It should return table Head with sort icons.", (done) => {
  function setSortKey() {
    done();
  }
  render(
    <table>
      <TableHead
        sortKey={"createdAt"}
        sortOrder={"asc"}
        setSortKey={setSortKey}
        setSortOrder={() => {}}
      />
    </table>
  );
  const nodeForUpdateSortNode = screen.getAllByAltText(/CaretUpDown/i);
  fireEvent.click(nodeForUpdateSortNode[0]);
});

afterEach(cleanup);
