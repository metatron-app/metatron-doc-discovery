Create a data source
-----------------------

Click the “+ Create a new data source” button in the top-right of the data source management home to create a new data source. First, select a type of source data.

.. figure:: /_static/img/part02/Create_a_data_source.png

1. **File**: Creates a data source from a file stored on your local PC. Only comma-separated files such as xls, xlsx and csv can be imported (for details, see Subsection A).
2. **Database**: Creates a data source from an external database. The databases currently supported by Metatron Discovery include Oracle, MySQL, Hive, presto, and TIBERO (for details, see Subsection B).
3. **Staging DB**: Creates a data source from Metatron’s internal Hive database.
4. **Real-time**: This function is not currently supported.
5. **Data snapshot**: This function is not currently supported.
6. **Metatron engine**: Migrates a data source stored in Metatron version 1.0.

Create a data source from a file
=================================

1. On the source data type selection page, select “File.”

2. Select a file to be used as a data source from your local PC. You can either click the Import button and select the file, or drag and drop a file to the box. Once a file is selected, click Next.

.. figure:: /_static/img/part02/Create_a_data_source_with_file_1.png

3. From the file, select the sheet to be included in the data source.

.. figure:: /_static/img/part02/Create_a_data_source_with_file_2.png

- File name: Name of the imported file. You can replace it with another file.
- File sheet list: Displays the sheets included in the imported file. Select the sheet from which you want to create a data source.
- File sheet name: Name of the currently selected sheet.
- Size: Size of the imported file.
- Columns: Number of columns in the imported file.
- Rows: Displayed number of rows and total number of rows in the imported file. Enter the number of rows to be displayed on the page.
- type: Displays how many data types are recognized from the columns. The data type of each column can be modified later.
- Use the first row as the head column: Select the check box to use the first row as column headers. If you don’t select it, a new row is inserted as a column header row.

4. Configure the schema of the data source.
**Filter columns by criteria**

.. figure:: /_static/img/part02/Search_columns_that_meet_the_criteria.png

- Search by column name: Searches the imported file for columns by name.
- Role: Displays all, dimension, or measure columns of the imported file.
- Recommended filter: Displays columns to which a top-priority filter is applied.
- Type: Filters the columns in the imported file by field type.
- Column list section: Lists columns filtered by specified criteria (for details, see “Edit or delete columns in a batch” below).
- Individual column settings section: This section allows you to set the attributes of the column selected from the column list (for details, see “Edit attributes of individual column’ below).
- Timestamp setting: Sets how the rows are timestamped. Metatron Druid is a time-series engine that requires a timestamp for each row when a data source is created. You can either designate an existing time-type column as a timestamp column, or create a new time-type column whose values are all timestamped with the current time.

**Edit or delete columns in a batch**

In the data column list section, you can edit or delete columns in a batch. Select the check boxes of the columns you want to delete or edit to apply another data type, set actions and click on “Apply.” Each setting is described below:

.. figure:: /_static/img/part02/Edit_and_delete_columns_in_a_batch.png

- Change type/delete: Select the action you want to perform for the selected columns.
- Dimension/measure: Change the role of the selected columns to dimension or measure.
	- For dimension columns, the selectable data types include Character, Boolean, Integer, Decimal, Date, Time, Latitude, and Longitude.
	- For measure columns, you can set data type to Integer or Decimal.
- Column type: Select the new data type you want to apply to the selected columns.

**Edit attributes of an individual column**

This area is used to edit attributes of a column selected from the column list.

.. figure:: /_static/img/part02/Edit_attributes_of_an_individual_column.png

- Name: Name of the selected column.
- Number of data rows: Indicates how many rows are displayed on the screen.
- Role: Whether the selected column is a dimension or measure column. You can switch the setting.
- Type: The data type of the column. You can change it to another data type. Available data types vary with the selected role (dimension/measure).
- Recommended filter: If a column contains large amounts of data, loading the data source can take a long time thereby causing a timeout error. The data manager can configure recommended filters on columns in which these errors are expected. This helps you to organize your dashboards or charts more efficiently.
	- Apply as a priority filter: Select whether to apply a priority filter to the selected column.
	- Allows to select only a single item: This check box appears when you apply a priority filter to the column. Select it only if the column contains very large data.
	- Edit order: Click on it to change the prioritization of the columns to which a recommended filter is applied.

- Missing: Set how to handle the nulls in the column.
	- Replace with: Replaces the nulls with the value typed in.
	- Discard: Discards the nulls.
	- Do not set: Leaves the nulls as nulls. However, the nulls in the timestamp column are mandatorily discarded.

5. Configure data source ingestion and click Next.

.. figure:: /_static/img/part02/Create_a_data_source_with_file_3.png

- Granularity settings: Set two types of granularity.
	- Segment granularity: In Druid, a data source is stored into multiple segments to be processed over multiple nodes in the distributed cluster environment. This granularity setting defines the time intervals into which the data source is partitioned.
	- Query granularity: Defines the minimum time period by which data is queried. This ensures faster returns by aggregating data per granularity interval.
- Rollup: Rollup merges events include the same dimension values. A summarization rule might be summing up all values in each column or applying a set of expressions such as “profit = sales - expenses.” This rollup option helps to ingest data more effectively.
- Advanced setting (Opt): Configures how to ingest data. The ingestion tuning option helps to ingest data effectively. Type in the text box in the JSON format. Example:

.. code-block:: json

	{
		maxRowsInMemory : 75000,
		maxOccupationInMemory : -1,
		maxShardLength : -2147483648,
		leaveIntermediate : false,
		cleanupOnFailure : true,
		overwriteFiles : false,
		ignoreInvalidRows : false,
		assumeTimeSorted : false
	}

6. Confirm the information about the data set from the imported file, enter a name and description, and click Done to create a data source. It may take a few seconds or minutes depending on the amount of data as the source data is ingested into the internal Metatron engine (Druid).

.. figure:: /_static/img/part02/Create_a_data_source_with_file_4.png

7. On the data source management home, you will find a new data source having been created. While ingestion is in progress, the status is marked as Preparing. Once it is finished, the status is changed to Enabled and the data source becomes available.

.. figure:: /_static/img/part02/Create_a_data_source_with_file_5.png

Create a data source from a database or staging DB
===================================================

1. On the source data type selection page, select “Database” or “Staging DB.”

2. If you select “Database,” load an already established data connection or enter connection information for a new database on the data connection setting page below. This step is skipped if you select Staging DB.

.. figure::/_static/img/part02/Create_a_data_source_using_a_database_or_Staging_DB.png

- Load a data connection: Used to select an already established data connection. Select a connection to automatically load the access information to its connected database. However, you must verify the connection by clicking the Test button.
- DB type: Select the type of the database to be connected. Currently the following five database types are supported: Oracle, MySQL, Hive, presto, and TIBERO.
- Ingestion type: Select how to ingest data into the data source.
	- Ingested data: Displays data sources that contain data ingested into the Metatron storage.
	- Linked data: Displays data sources that load data from linked databases whenever necessary.
- Host: Enter the hostname to connect to the database.
- Port: Enter the port to connect to the database.
- SID/Catalog: For Oracle and TIBERO, enter the SID; for presto, enter the catalog.
- Username: Enter the username of the database.
- Password: Enter the password of the database.
- Test: Once you fill out all fields, the Test button becomes active. Click on it to verify if the connection is valid: The validity of the connection appears below the button.
- Save as a new data connection: To connect to a new database rather than using an established data connection, you must save the connection information into a new data connection. Enter a name for the new data connection.

3. Select data. You can either select a table from the connected database, or write a query yourself. When using the staging DB, you can only select an existing table to create a data source.

**Table**

Select a database and a table to display the table’s data in the lower section. Confirm the data and click Next.

.. figure:: /_static/img/part02/Create_a_data_source_table.png

- Select database: Select a database represented by the selected data connection.
- Select schema: Select a table in the selected database.

**Query**

Write a query to import the data you want, and click Run to display the data in the lower section. Confirm the data and click Next.

.. figure:: /_static/img/part02/Create_a_data_source_query_1.png

4. The subsequent steps are the same as those to import data from a file. See Step 3 and onwards in Section 2.1.3 A. However, when creating a data source from a database, you must configure additional ingestion settings.

.. figure:: /_static/img/part02/Create_a_data_source_query_2.png

- Ingestion settings: Configure data ingestion.
	- Ingest once: Saves data only once.
	- Ingest periodically: Saves data on a regular basis.
- Scope of ingesting data: Set the scope of data to be ingested.
	- Gets the entire data: Ingests all data if you select to ingest periodically.
	- Gets only the first: Determines how many rows will be ingested from the beginning part of the source table.

Migrate a data source from Metatron engine (v1.0)
==================================================

- On the source data type selection page, select “Metatron engine.”

- When data sources created in Metatron V1.0 are listed on the left as shown below, select the check boxes of the data sources you want to migrate to the current version.

.. figure:: /_static/img/part02/metatron_engine_(v1.0)_data_source_migration.png

- Click Done to migrate the selected data sources.

