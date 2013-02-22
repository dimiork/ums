<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:31 PM
 * To change this template use File | Settings | File Templates.
 */
class get_Model extends Model
{
    public function Get($id)
    {
        return [
            'anketa' => $this->db->getByKey('ankets', ['id' => $id])[0],
            'education' => $this->db->getByKey('education', ['anketaID' => $id]),
            'postgraduate' => $this->db->getByKey('postgraduateTraining', ['anketaID' => $id]),
            'family' => $this->db->getByKey('familyStatus', ['anketaID' => $id])
        ];
    }
}