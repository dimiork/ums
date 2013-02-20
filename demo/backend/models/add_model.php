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
        // perform data sanitation
        $data = $this->_Sanitize($data);
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

    private function _Sanitize($data = [])
    {
        $filters = [
            'anketa' => [
                'date' => array('filter' => FILTER_SANITIZE_STRING),
                'INN' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'sex' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'photo' => array('filter' => FILTER_SANITIZE_STRING),
                'lastName' => array('filter' => FILTER_SANITIZE_STRING),
                'firstName' => array('filter' => FILTER_SANITIZE_STRING),
                'middleName' => array('filter' => FILTER_SANITIZE_STRING),
                'birthDate' => array('filter' => FILTER_SANITIZE_STRING),
                'citizenship' => array('filter' => FILTER_SANITIZE_STRING),
                'education' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'postgraduate' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'adyunkture' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'doctoral' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'latestJob' => array('filter' => FILTER_SANITIZE_STRING),
                'profession' => array('filter' => FILTER_SANITIZE_STRING),
                'dateReasonDismissal' => array('filter' => FILTER_SANITIZE_STRING),
                'pensionInfo' => array('filter' => FILTER_SANITIZE_STRING),
                'familyStatus' => array('filter' => FILTER_SANITIZE_STRING),
                'actualPlace' => array('filter' => FILTER_SANITIZE_STRING),
                'registrationPlace' => array('filter' => FILTER_SANITIZE_STRING),
                'serial' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'number' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'givenBy' => array('filter' => FILTER_SANITIZE_STRING),
                'passportDate' => array('filter' => FILTER_SANITIZE_STRING),
                'army' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
            ],
            'education' => [
                'educationalInstitutionName' => array('filter' => FILTER_SANITIZE_STRING),
                'diplomaSerialNumber' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
                'endYear' => array('filter' => FILTER_SANITIZE_STRING),
                'profession' => array('filter' => FILTER_SANITIZE_STRING),
                'qualification' => array('filter' => FILTER_SANITIZE_STRING),
                'learningForm' => array('filter' => FILTER_SANITIZE_NUMBER_INT),
            ],
            'postgraduate' => [
                'educationalInstitutionName' => array('filter' => FILTER_SANITIZE_STRING),
                'endYear' => array('filter' => FILTER_SANITIZE_STRING),
                'degree' => array('filter' => FILTER_SANITIZE_STRING),
            ],
            'family' => [
                'familyRelationship' => array('filter' => FILTER_SANITIZE_STRING),
                'fullName' => array('filter' => FILTER_SANITIZE_STRING),
                'birthDate' => array('filter' => FILTER_SANITIZE_STRING),
            ]
        ];
        $result = null;


        // sanitize main anketa
        $result['anketa'] = filter_var_array($data['anketa'], $filters['anketa']);

        // sanitize education
        foreach ($data['education'] as $id => $education) {
            $result['education'][$id] = filter_var_array($education, $filters['education']);
        }

        // sanitize postgraduate
        foreach ($data['postgraduate'] as $id => $postgraduate) {
            $result['postgraduate'][$id] = filter_var_array($postgraduate, $filters['postgraduate']);
        }

        // sanitize family
        foreach ($data['family'] as $id => $family) {
            $result['family'][$id] = filter_var_array($family, $filters['family']);
        }

        return $result;
    }
}