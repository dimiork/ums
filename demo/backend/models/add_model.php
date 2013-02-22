<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:31 PM
 * To change this template use File | Settings | File Templates.
 */
class add_Model extends Model
{
    public function Add($data = [])
    {
        // isert main anketa and get id for education, family etc.
        $anketaID = $this->db->insert('ankets', $data['anketa']);
        // insert educations
        $this->db->bulkInsert('education', ['anketaID' => $anketaID], $data['education']);
        // insert postgraduate educations
        $this->db->bulkInsert('postgraduateTraining', ['anketaID' => $anketaID], $data['postgraduate']);
        // insert family status
        $this->db->bulkInsert('familyStatus', ['anketaID' => $anketaID], $data['family']);

        return isset($anketaID) ? $anketaID : null;
    }
}