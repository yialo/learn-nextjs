import { NextApiRequest, NextApiResponse } from 'next';

interface IRequest extends NextApiRequest {
  query: {
    name: string;
  };
}

interface IResponseData {
  yourName: string;
}

export default function greetByName(req: IRequest, res: NextApiResponse<IResponseData>) {
  res.json({ yourName: req.query.name });
}
