import { restaurantService } from '../../services/restaurant-service';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export interface TableUpdateBody {
    table: number;
    available: boolean;
}

export function tableUpdate(req: Request, res: Response, next) {
    let body: TableUpdateBody = req.body;
    let id = req.params.id;
    restaurantService
        .tableUpdate(id, body.table, body.available)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err))
}