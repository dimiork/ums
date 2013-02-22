<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:31 PM
 * To change this template use File | Settings | File Templates.
 */
class update_Model extends Model
{
    public function Update($id, $anketa)
    {
        // check if anketa with id exists in DB
        if ($this->db->getCount('ankets', "`id` = {$id}")>0) {
            // update current anketa
            $this->db->update('ankets', $anketa['anketa'], "`id` = {$id}");
            // delete all from education table by id
            $this->db->delete('education', "`anketaID`={$id}");
            // delete all from postgraduateTraining table by id
            $this->db->delete('postgraduateTraining', "`anketaID`={$id}");
            // delete all from familyStatus table by id
            $this->db->delete('familyStatus', "`anketaID`={$id}");

            // insert educations
            $this->db->bulkInsert('education', ['anketaID' => $id], $anketa['education']);
            // insert postgraduate educations
            $this->db->bulkInsert('postgraduateTraining', ['anketaID' => $id], $anketa['postgraduate']);
            // insert family status
            $this->db->bulkInsert('familyStatus', ['anketaID' => $id], $anketa['family']);

            // all is OK
            return true;
        } else {
            return false;
        }
    }
}