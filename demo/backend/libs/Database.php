<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:21 PM
 * To change this template use File | Settings | File Templates.
 */

class Database extends PDO
{

    public function __construct($DB_TYPE, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS)
    {
        parent::__construct($DB_TYPE . ':host=' . $DB_HOST . ';dbname=' . $DB_NAME, $DB_USER, $DB_PASS); // establish db connection
        $this->query("SET NAMES utf8"); // set utf8 encoding
    }

    public function getByKey($table, $key = [])
    {
        $sth = $this->prepare("SELECT * FROM `{$table}` WHERE `" . array_keys($key)[0] . "`= :id");

        $sth->execute([
            ':id' => array_values($key)[0]
        ]);

        $data = $sth->fetchAll(PDO::FETCH_ASSOC);

        return ($sth->rowCount() > 0) ? $data : null;
    }

    /**
     * select
     * @param string $sql An SQL string
     * @param array $array Paramters to bind
     * @param constant $fetchMode A PDO Fetch mode
     * @return mixed
     */
    public function select($sql, $array = array(), $fetchMode = PDO::FETCH_ASSOC)
    {
        $sth = $this->prepare($sql);
        foreach ($array as $key => $value) {
            $sth->bindValue("$key", $value);
        }

        $sth->execute();
        return $sth->fetchAll($fetchMode);
    }

    /**
     * insert
     * @param string $table A name of table to insert into
     * @param string $data An associative array
     */
    public function insert($table, $data)
    {
        ksort($data);

        $fieldNames = implode('`, `', array_keys($data));
        $fieldValues = ':' . implode(', :', array_keys($data));

        $sth = $this->prepare("INSERT INTO {$table} (`{$fieldNames}`) VALUES ({$fieldValues})");

        foreach ($data as $key => $value) {
            $sth->bindValue(":$key", $value);
        }

        if($sth->execute()){
            return $this->lastInsertId();
        }else{
            $this->rollBack();
            return null;
        }
    }

    /**
     * @param $table to insert in
     * @param array $id key - db field key name, value - int id
     * @param array $data to insert
     */
    public function bulkInsert($table, $id = [], $data = [])
    {
        $idField = array_keys($id)[0];
        $idValue = (int)$id[$idField];

        foreach ($data as $row) {
            // insert anketa id to every subtable row
            $row[$idField] = $idValue;
            $this->insert($table, $row);
        }
    }

    /**
     * update
     * @param string $table A name of table to insert into
     * @param string $data An associative array
     * @param string $where the WHERE query part
     */
    public function update($table, $data, $where)
    {
        ksort($data);

        $fieldDetails = NULL;
        foreach ($data as $key => $value) {
            $fieldDetails .= "`$key`=:$key,";
        }
        $fieldDetails = rtrim($fieldDetails, ',');

        $sth = $this->prepare("UPDATE {$table} SET {$fieldDetails} WHERE {$where}");

        foreach ($data as $key => $value) {
            $sth->bindValue(":$key", $value);
        }

        $sth->execute();
        return $sth->rowCount();
    }

    /**
     * delete
     * @param string $table
     * @param string $where
     * @return integer Affected Rows
     */
    public function delete($table, $where)
    {
        return $this->query("DELETE FROM {$table} WHERE {$where};")->rowCount();
    }

    public function getCount($table, $where)
    {
        return $this->query("SELECT count(*) FROM `{$table}` WHERE {$where};")->fetchColumn();
    }
}
