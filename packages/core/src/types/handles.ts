import type { XYPosition, Position, Dimensions, OnConnect, Connection } from '.';

export type HandleType = 'source' | 'target';

export type HandleElement = XYPosition &
  Dimensions & {
    id?: string | null;
    position: Position;
    color?: string | null;
  };

export type ConnectingHandle = {
  nodeId: string;
  type: HandleType;
  handleId?: string | null;
};

export type HandleProps = {
  type: HandleType;
  position: Position;
  maxConnections?: Number;
  isConnectable?: boolean;
  isConnectableStart?: boolean;
  isConnectableEnd?: boolean;
  onConnect?: OnConnect;
  isValidConnection?: (connection: Connection) => boolean;
  id?: string;
};
