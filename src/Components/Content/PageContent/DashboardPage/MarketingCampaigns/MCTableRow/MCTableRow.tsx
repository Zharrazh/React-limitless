import "./MCTableRow.scss";
import React, { FunctionComponent } from "react";
import { TableRow } from "../../../../../../utils/Components/Table/TableRow";
import "../../../../../../utils/styles/tables.scss";
import { CommonInfoLabel } from "../../../../../../utils/Components/CommonInfoLabel";
import {
  DynamicLabel,
  DynamicLabelIcon,
} from "../../../../../../utils/Components/DynamicLabel";
import {
  StatusLabel,
  StatusType,
  StatusSize,
} from "../../../../../../utils/Components/StatusLabel";

export enum MCTableRowStatus {
  PENDING = "Pending",
  ACTIVE = "Active",
  CLOSED = "Closed",
  ON_HOLD = "On hold",
}

type MCTableRowProps = {
  logoImg: string;
  companyName: string;
  period: string;
  client: string;
  changes: string;
  isPositiveChanges: boolean;
  budget: string;
  status: MCTableRowStatus;
};

export const MCTableRow: FunctionComponent<MCTableRowProps> = (props) => {
  let statusLabel;
  switch (props.status) {
    case MCTableRowStatus.PENDING:
      statusLabel = (
        <StatusLabel
          type={StatusType.SUCCESS}
          text={props.status}
          size={StatusSize.MEDIUM}
        />
      );
      break;
    case MCTableRowStatus.ACTIVE:
      statusLabel = (
        <StatusLabel
          type={StatusType.INFO}
          text={props.status}
          size={StatusSize.MEDIUM}
        />
      );
      break;
    case MCTableRowStatus.ON_HOLD:
      statusLabel = (
        <StatusLabel
          type={StatusType.UNKNOWN}
          text={props.status}
          size={StatusSize.MEDIUM}
        />
      );
      break;
    case MCTableRowStatus.CLOSED:
      statusLabel = (
        <StatusLabel
          type={StatusType.ERROR}
          text={props.status}
          size={StatusSize.MEDIUM}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="mcTableRow">
      <TableRow>
        <div className="tbl-col-2">
          <CommonInfoLabel
            img={props.logoImg}
            mainInfo={props.companyName}
            secondaryInfo={props.period}
          />
        </div>
        <div className="tbl-col-1">
          <div className="mcTableRow__client">{props.client}</div>
        </div>
        <div className="tbl-col-1">
          <DynamicLabel
            iconType={DynamicLabelIcon.ARROW}
            value={props.changes}
            isPositive={props.isPositiveChanges}
          />
        </div>
        <div className="tbl-col-1">
          <div className="mcTableRow__budget">{props.budget}</div>
        </div>
        <div className="tbl-col-1">{statusLabel}</div>
        <div><i className="fas fa-bars"></i></div>
      </TableRow>
    </div>
  );
};
