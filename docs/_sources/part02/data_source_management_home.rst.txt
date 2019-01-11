Data source management home
----------------------------

On this home page, you can create, edit and view data sources.

.. figure:: /_static/img/part02/data_source_management_home_screen.png
   :alt: Part02_data_source_management_home_screen

1. Data type: Filters the data source list by type of source data.
	- All: Displays data sources regardless of source data type.
	- File: Displays data sources created from local PC files.
	- Database: Displays data sources created from databases.
	- Staging DB: Displays data sources created from Metatron’s internal Hive database.

2. Ingestion type: Filters the data source list by type of ingestion.
	- All: Displays data sources regardless of ingestion type.
	- Ingested data: Displays data sources that contain data ingested into the Metatron storage.
	- Linked data: Displays data sources that load data from linked databases whenever necessary.

3. Status: Filters the data source list by the availability of data sources stored in the data storage.
	- All: Displays data sources regardless of their availability.
	- Enabled: Displays data sources that have been ingested and are available in workbooks or notebooks.
	- Disabled: Displays data sources that have been ingested but are not available because of an error in a certain Druid process.
	- Preparing: Displays new data sources whose ingestion is in progress.

4. Show open data only: Displays only data sources publicly available to all workspaces.

5. Time: Determines whether the data source list is filtered by created or updated time. You can choose from among All, Today, and Last 7 days or specify a time range to display only those entries that were created/updated within the range.

6. Search by name of data source: Searches the data source list by the name you type in.

7. Number of entries: Displays how many data sources are retrieved in the list.

8. Create a new data source: Click on it to create a new data source.

9. Data source list: Lists data sources filtered by specified criteria. Click an entry in the list to view its details (See Section 2.1.2).

10. Delete: Hover the mouse over a data source to display a trash icon. Click the icon to delete the data source.
