<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:31 PM
 * To change this template use File | Settings | File Templates.
 */
class search_Model extends Model
{
    public function Search($request)
    {
        $where = []; // bind array
        $whereSQL = null; //sql string

        // search by name
        if (isset($request['name'])) {
            $where['firstName'] = '%' . $request['name'] . '%';
            $where['middleName'] = '%' . $request['name'] . '%';
            $where['lastName'] = '%' . $request['name'] . '%';

            $whereSQL[] = '(firstName LIKE :firstName OR middleName LIKE :middleName OR lastName LIKE :lastName)';
        }
/*
        // search by age
        if (isset($request['age'])) {
            // search by age greater than defined
            if (isset($request['age']['greater'])) {
                $where['age'] = $request['age']['greater'];

                $whereSQL[] = '(DATEDIFF(CURRENT_DATE, ankets.birthDate)/365 >= :age)';
            }

            // search by age less than defined
            if (isset($request['age']['less'])) {
                $where['age'] = $request['age']['less'];

                $whereSQL[] = '(DATEDIFF(CURRENT_DATE, ankets.birthDate)/365 <= :age)';
            }

            // search by age interval
            if (isset($request['age']['interval'])) {
                $where['start'] = $request['age']['interval'][0];
                $where['end'] = $request['age']['interval'][1];

                $whereSQL[] = '(DATEDIFF(CURRENT_DATE, ankets.birthDate)/365 BETWEEN :start AND :end)';
            }
        }

        // search by sex
        if (isset($request['sex'])) {
            $where['sex'] = $request['sex'];

            $whereSQL[] = '(`sex` = :sex)';
        }

        // search by education
        if (isset($request['education'])) {
            $where['education'] = $request['education'];

            $whereSQL[] = '(`education` = :education)';
        }

        //search by army
        if (isset($request['army'])) {
            $where['army'] = $request['army'];

            $whereSQL[] = '(`army` = :army)';
        }*/

        //var_dump($whereSQL);

        //echo implode(' AND ',$whereSQL);

        $sql = "SELECT id, CONCAT_WS(' ', lastName, firstName, middleName) AS full_name, birthDate, sex, education, army FROM ankets WHERE "
            . implode(' AND ', $whereSQL);
        //var_dump($this->db->select($sql, $where));
        return $this->db->select($sql, $where);
    }
}