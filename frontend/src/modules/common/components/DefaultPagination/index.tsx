import { Pagination } from "antd";
import { FC, useState } from "react";
import { OperationVariables, QueryLazyOptions } from "@apollo/client";

type Props = {
  total: number;
  getNewPage: (options?: (QueryLazyOptions<OperationVariables> | undefined)) => void;
  value?: string;
}
const DefaultPagination: FC<Props> = ({ total, getNewPage, value }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(9);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    getNewPage({ variables: { page, value }});
  }

  return <Pagination current={currentPage} total={total} pageSize={pageSize} onChange={onPageChange} />
}

export default DefaultPagination;
